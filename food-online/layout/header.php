<?php  
  include "includes/connection.inc.php";
  include "includes/constant.inc.php";
  
  
  
  
  $currentPathString = $_SERVER['REQUEST_URI'];
  $currentPathArray = explode('/', $currentPathString);
  $currentPathFull = $currentPathArray[count($currentPathArray) - 1];
  //This gives Path without appended variables in link
  if(strpos($currentPathFull, '?') !== False) {
    $currentPath = substr($currentPathFull, 0, strpos($currentPathFull, "?"));
  } else {
    $currentPath = $currentPathFull;
      }    
  $pageTitle = '';

  if($currentPath == '' || $currentPath == 'index.php') {
    $pageTitle = 'Cafe Payala - Home';
  } else if($currentPath == 'category.php') {
    $pageTitle = 'Cafe Payala - Dish Categories';
  } else if($currentPath == 'menu.php') {
    $pageTitle = 'Cafe Payala - See Our Menue';
  } else if ($currentPath == 'contact.php') {
    $pageTitle = 'Cafe Payala - Contact Us';
  } else {
    $pageTitle = 'Cafe Payala';
}

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />  
    <meta name="description" content="Cafe Pyala Most Affordable Fast Food place in Faisalabad">
    <meta name="keywords" content="Cafe Pyala, Cafe Faisalabad, Fast Food">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.min.css" />
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=MuseoModerno&family=Poppins&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="global_css/global.css">
    <link rel="stylesheet" href="custom.css" />
    <script
      src="https://kit.fontawesome.com/294f177ac8.js"
      crossorigin="anonymous"
    ></script>
    <title><?php echo $pageTitle ?></title>
  </head>
<body class="front-page-body">
    <header class="text-gray-700 body-font bg-orange fancy-font">
      <div
        class="container sm:mx-auto flex flex-wrap sm:p-5 flex-col md:flex-row items-center"
      >
        <nav class="flex text-black lg:w-2/5 flex-wrap mb-4 sm:mb-0 items-center text-base md:ml-auto nav-links ">
          <a href="index.php" class="<?php if($currentPath == '' || $currentPath == 'index.php'){ echo 'nav-underline' ;} ?> sm:ml-5 md:mr-5 lg:mx-3 px-2 cursor-pointer md:text-lg nav-elements">Home</a>
          <a href="menu.php" class="<?php if($currentPath == 'menu.php'){ echo 'nav-underline' ; } ?> sm:ml-5 md:mr-5 lg:mx-3 px-2 cursor-pointer md:text-lg nav-elements">Menu</a>
          <a href="category.php" class="<?php if($currentPath == 'category.php'){ echo 'nav-underline' ; } ?> sm:ml-5 md:mr-5 lg:mx-3 px-2 cursor-pointer md:text-lg nav-elements">Categories</a>
          <a href="contact.php" class="<?php if($currentPath == 'contact.php'){ echo 'nav-underline' ; } ?> sm:ml-5 md:mr-5 lg:mx-3 px-2 cursor-pointer md:text-lg nav-elements">Contact</a>
          
        </nav>
        <div onclick="showNav()" class="burger sm:hidden cursor-pointer">
          <div class="line1 line bg-white"></div>
          <div class="line2 line bg-white"></div>
          <div class="line3 line bg-white"></div>
        </div>
        <a
          class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-2 md:mb-0"
        >
          <span class="ml-3 text-2xl md:text-3xl title mt-2">Cafe Payala</span>
        </a>
        <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 mb-2 sm:mb-0 ">
          <a 
            href="https://api.whatsapp.com/send?phone=923011112965&text=&source=&data=&app_absent="
            target="_blanck"
            class="btn-order inline-flex font-sans items-center bg-yellow-200 border-0 py-1 px-2 focus:outline-none hover:bg-yellow-300 rounded text-base md:mt-0"
          >
            Order Now
            <i class="fab fa-whatsapp mx-2"></i>
          </a>
        </div>
      </div>
    </header>