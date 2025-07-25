import reactLogo from './assets/react.svg';
 var navigation = [{'title':"Home",'href':"/",'available':true},
     {'title':"About",'href':"/About",'available':false},
     {'title':"Services",'href':"/Services",'available':false},
     {'title':"Pricing",'href':"/Pricing",'available':false},
     {'title':"Contact",'href':"/Contact",'available':false}];

function Nav (){
    return (

<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={reactLogo} className="h-8" alt="Logo" />
        <span className="self-center text-2xl whitespace-nowrap dark:text-white">Mi tiendita</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        </svg>
    </button>

    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {navigation.map(e=>
          <li>
            <a href={e.href} className={e.available?"block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500":"block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"} aria-current="page">{e.title}</a>
          </li>
        )}     
      </ul>

    </div>

  </div>
</nav>

    );
}
export default Nav;