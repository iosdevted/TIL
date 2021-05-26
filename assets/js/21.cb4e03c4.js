(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{385:function(s,t,a){"use strict";a.r(t);var e=a(42),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"sql-pl-pgsql-cursor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-pl-pgsql-cursor"}},[s._v("#")]),s._v(" [SQL] PL/pgSQL Cursor")]),s._v(" "),a("p",[s._v("A PL/pgSQL cursor allows you to encapsulate a query and process each individual row at a time.")]),s._v(" "),a("p",[s._v("Typically, you use cursors when you want to divide a large result set into parts and process each part individually. If you process it at once, you may have a memory overflow error.")]),s._v(" "),a("p",[s._v("On top of that, you can develop a function that returns a reference to a cursor. This is an effective way to return a large result set from a function. The caller of the function can process the result set based on the cursor reference.")]),s._v(" "),a("h2",{attrs:{id:"declaring-cursors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#declaring-cursors"}},[s._v("#")]),s._v(" Declaring cursors")]),s._v(" "),a("p",[s._v("To access to a cursor, you need to declare a cursor variable in the declaration section of a block. PostgreSQL provides you with a special type called REFCURSOR to declare a cursor variable.")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("declare")]),s._v(" my_cursor refcursor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("You can also declare a cursor that bounds to a query by using the following syntax:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("cursor_name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("no")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" scroll "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("cursor")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" name datatype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("data")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("First, you specify a variable name for the cursor.")]),s._v(" "),a("p",[s._v("Next, you specify whether the cursor can be scrolled backward using the SCROLL. If you use NO SCROLL, the cursor cannot be scrolled backward.")]),s._v(" "),a("p",[s._v("Then, you put the CURSOR keyword followed by a list of comma-separated arguments ( name datatype) that defines parameters for the query. These arguments will be substituted by values when the cursor is opened.")]),s._v(" "),a("p",[s._v("After that, you specify a query following the FOR keyword. You can use any valid SELECT statement here.")]),s._v(" "),a("p",[s._v("The following example illustrates how to declare cursors:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("declare")]),s._v("\n    cur_films  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("cursor")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" \n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" \n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" film"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    cur_films2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("cursor")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("year")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" \n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" \n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" film \n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" release_year "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("year")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"opening-cursors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#opening-cursors"}},[s._v("#")]),s._v(" Opening cursors")]),s._v(" "),a("p",[s._v("Cursors must be opened before they can be used to query rows. PostgreSQL provides the syntax for opening an unbound and bound cursor.")]),s._v(" "),a("p",[s._v("You open an unbound cursor using the following syntax:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OPEN")]),s._v(" unbound_cursor_variable "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" SCROLL "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("Because the unbound cursor variable is not bounded to any query when we declared it, we have to specify the query when we open it. See the following example:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("open")]),s._v(" my_cursor "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" \n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" city \n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" country "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p_country"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("PostgreSQL allows you to open a cursor and bound it to a dynamic query. Here is the syntax:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("open")]),s._v(" unbound_cursor_variable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("no")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" scroll "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("execute")]),s._v(" query_string "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" expression "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nquery :"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'select * from city order by $1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("open")]),s._v(" cur_city "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("execute")]),s._v(" query "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" sort_field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("Because a bound cursor already bounds to a query when we declared it, so when we open it, we just need to pass the arguments to the query if necessary.")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("open")]),s._v(" cursor_variable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("name:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("open")]),s._v(" cur_films"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("open")]),s._v(" cur_films2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("year")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2005")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[s._v("#")]),s._v(" References")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.postgresqltutorial.com/plpgsql-cursor/",target:"_blank",rel:"noopener noreferrer"}},[s._v("PostgreSQL Tutorial - PL/pgSQL Cursor"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);