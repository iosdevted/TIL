# [HowTo] RxSwift + API + MVVM

How to use URLSession for the web API calls in reactive way in MVVM architecture.

### JSON

```JSON
{
  "status": "ok",
  "totalResults": 19821,
  "articles": [
    {
      "source": {
        "id": null,
        "name": "Itc.ua"
      },
      "author": "Сергей Кулеш",
      "title": "Українські розробники презентували на IDEX-2021 плаваючий гусеничний броньований гібридний електромобіль «Шторм» [фото, відео]",
      "description": "Команда українського конструктора бронетехніки Олександра Кузнєцова представила на міжнародній оборонній виставці в Об’єднаних Арабських Еміратах IDEX-2021 свою розробку «Шторм». Це гусенична броньована платформа з гібридною тягою, що здатна розвивати швидкіс…",
      "url": "https://itc.ua/news/ukra%d1%97nski-rozrobniki-prezentuvali-na-idex-2021-plavayuchij-gusenichnij-bronovanij-elektromobil-shtorm-foto-video/",
      "urlToImage": "https://i0.wp.com/itc.ua/wp-content/uploads/2021/02/shtorm.jpg",
      "publishedAt": "2021-02-22T11:20:14Z",
      "content": "IDEX-2021 «».\r\n , 140 / .\r\n« «», . 1,5 . 140 / 18 36 . . , , , . , , », .\r\n, . , , . . , .\r\n. . Streit Group ’ .\r\n« . , 65 , . , Tesla. , , . , . . 70% », .\r\n, , . , .\r\n, 5% , .\r\n« . . , . , . , , «»… [+42 chars]"
    },

    ...
```

### Model

```swift
//
//  Article.swift
//  RxNews
//
//  Created by Ted on 2021/02/22.
//
import Foundation

struct ArticleResponse: Decodable {
    let articles: [Article]
}

struct Article: Decodable {
    let title: String
    let publishedAt: String
}
```

### ViewModel

```swift
//
//  ArticleViewModel.swift
//  RxNews
//
//  Created by Ted on 2021/02/22.
//

import Foundation
import RxSwift
import RxCocoa

struct ArticleListViewModel {
    
    let articlesVM: [ArticleViewModel]
}

extension ArticleListViewModel {
    
    init(_ articles: [Article]) {
        self.articlesVM = articles.compactMap(ArticleViewModel.init)
    }
}

extension ArticleListViewModel {
    
    func articleAt(_ index: Int) -> ArticleViewModel {
        return self.articlesVM[index]
    }
}


struct ArticleViewModel {
    
    let article: Article
    
    init(_ article: Article) {
        self.article = article
    }
}

extension ArticleViewModel {
    
    var title: Observable<String> {
        return Observable<String>.just(article.title)
    }
    
    var description: Observable<String> {
        return Observable<String>.just(article.description ?? "")
    }
}
```

### URLRequest+Extension

```swift
//  URLRequest+Extension.swift
//  RxNews
//
//  Created by Ted on 2021/02/22.
//

import Foundation
import RxSwift
import RxCocoa

struct Resource<T: Decodable> {
    let url: URL
}

extension URLRequest {
    
    static func load<T>(resource: Resource<T>) -> Observable<T> {
        return Observable.just(resource.url)
            .flatMap { url -> Observable<Data> in
            //flatMap make events to another observable
                let request = URLRequest(url: url)
                 //a simple way to make data type with RxSwift
                return URLSession.shared.rx.data(request: request)
            }.map { data -> T in
                return try JSONDecoder().decode(T.self, from: data)
            }
    }
}
```

### ViewController

```swift
//
//  NewsTableViewController.swift
//  RxNews
//
//  Created by Ted on 2021/02/21.
//

import UIKit
import RxSwift
import RxCocoa

...
//MARK: - Properties
private var articleListVM: ArticleListViewModel!

...

//MARK: - Helpers
private func populateNews() {
    
    let resource = Resource<ArticleResponse>(url: URL(string: "")!)
    
    URLRequest.load(resource: resource)
        .subscribe(onNext: { articleResponse in
            
            let articles = articleResponse.articles
            self.articleListVM = ArticleListViewModel(articles)
            
            DispatchQueue.main.async {
                self.tableView.reloadData()
            }
            
        }).disposed(by: disposeBag)
}

... 

extension NewsViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return self.articleListVM == nil ? 0 : self.articleListVM.articlesVM.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: ReuseIdentifier, for: indexPath) as! ArticleTableViewCell
        
        let articleVM = self.articleListVM.articleAt(indexPath.row)
        
        articleVM.title.asDriver(onErrorJustReturn: "")
            .drive(cell.titleLabel.rx.text)
            .disposed(by: disposeBag)
        
        articleVM.description.asDriver(onErrorJustReturn: "")
            .drive(cell.descriptionLabel.rx.text)
            .disposed(by: disposeBag)
        
        return cell
    }
}
```

### Info.plist

If you want to allow HTTP connections to any site, you should use this keys:

```
App Transport Security Settings
    Allow Arbitrary Loads -> Yes
```

### Github Link

[RxNews Github Link](https://github.com/cielgrisdemoscou/ios-project/tree/master/RxNews)
