<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>$templateTitle</title>
<meta name="viewport" content="width=device-width">
<meta name="viewport" content="initial-scale=1.0">
<!-- STYLES =======================================-->
<link rel="stylesheet" type="text/css" media="screen" href="bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" media="screen" href="jquery/jquery-ui.min.css">
<link rel="stylesheet" type="text/css" media="screen" href="css/meted-base.min.css">
<link rel="stylesheet" type="text/css" media="screen" href="css/module-custom.css">
<link rel="stylesheet" type="text/css" media="print" href="css/module-print.css">
   
<!-- JS LIBRARIES =================================-->
<script src="jquery/jquery.min.js"></script>
<script src="jquery/jquery-ui.min.js"></script>
<script src="jquery/jquery-plugins.min.js"></script>
<script src="bootstrap/js/bootstrap.min.js"></script>
<script src="modernizr/modernizr.min.js"></script>

<!-- MEDIA PLAYER =================================-->
<link rel="stylesheet" type="text/css" media="screen" href="jquery/meted-player/mediaelementplayer.min.css">
<script src="jquery/meted-player/mediaelement-and-player.min.js"></script>

<!-- THIRD-PARTY HANDLERS =========================-->
<link rel="stylesheet" type="text/css" media="screen" href="jquery/apps/fancybox/fancybox.min.css">
<script src="jquery/apps/fancybox/fancybox.min.js"></script>
<script src="jquery/apps/elevatezoom/elevatezoom.min.js"></script>

<!-- EXTENSION SCRIPTS ============================-->
<script src="jquery/apps/drag/drag.js"></script>
<script src="jquery/apps/draw/draw.js"></script>
<link rel="stylesheet" type="text/css" media="screen" href="jquery/apps/image-sweep/image-sweep.css">
<script src="jquery/apps/image-sweep/image-sweep.js"></script>

<!-- PRESET DEFAULTS ==============================-->
<script type="text/javascript" src="jquery/defaults.js"></script>

<!-- PRESET OVERRIDES =============================-->
<script type="text/javascript">
	var printVersion = $typeBoolean; // Specify Print View.  [true] for PRINT, or [false] for DYNAMIC content.
</script>

<!-- IE SUPPORT ===================================-->
  <!--[if lte IE 9]>
    <script type="text/javascript" src="jquery/apps/draw/excanvas.js"></script>
    <script type="text/javascript" src="ie-support/respond.js"></script>
    <link rel="stylesheet" type="text/css" media="screen" href="ie-support/ie-support.css" />
  <![endif]-->
</head>
<body>
<!--NAVBAR-->
<nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
    	</div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="index.htm">Home</a></li>
            <li class="active"><a href="navmenu.php">Lesson</a></li>
            <li><a href="download.php">Download</a></li>
            <li><a href="media_gallery.php">Gallery</a></li>
            <li><a href="#userQuiz" data-toggle="modal">Quiz</a></li>
            <li><a href="#userSurvey" data-toggle="modal">Survey</a></li>
			<li><a href="" id="booster-link">Booster</a></li> 
          </ul>
        </div>
      </div>
</nav>


<div id="master-container" class="container">


<div class="row">
<div id="lesson-sidebar" class="col-sm-3">
	<h2 id="lesson-sidebar-title">$templateTitle</h2>
	
	<!--  Table of Contents -->
	<div id="menu" class="sidebar-toc">
		<div class="btn-group">
    <% if (narratedSwitch) { %>
    <!-- Multi-print Lesson Selector -->
		<a href="#" data-toggle="dropdown">
			<h4 id="lesson-sidebar-unit-title">$titleTag <span class="caret"></span></h4>
		</a>
      $tabMenu
    <% } %>
    </div>
    <% if (narratedSwitch) { %>
    <!-- Narrated/Text Switch -->
    <div id="toggle_text" class="module-nav">
      $typeLink
    </div>
    <% } %>
		<hr>
		$templateMenu
	</div>
</div>


<div id="lesson-content" class="col-sm-9">
<div id="print-button">
<a href="$printLink"><span class="glyphicon glyphicon-print"></span> Print</a>
</div>
	$templateContent

<!-- BACK TO TOP BUTTON ==========================-->
<p class="back-top"><a href="#top"><span class="glyphicon glyphicon-upload"></span></a></p>
</div>

</div>



<!--FOOTER-->
<div  id="lesson-footer" class="row">
<div class="col-md-8">
<p id="lesson-copyright">&copy; <%= currentYear %>, <a href="http://www.ucar.edu/">The University Corporation for Atmospheric Research</a> - All Rights Reserved.</p>
</div>
<div class="col-md-4">
	<ul id="parent-links">
	<li><a href="http://www.meted.ucar.edu/legal.htm">Legal Notices</a></li>
	<li><a href="http://comet.ucar.edu">COMET</a></li>
	<li><a href="http://www.meted.ucar.edu/">MetEd</a></li>
	</ul>
</div>
</div>


</div>
<!-- end master container -->



<!-- Quiz/Survey Prompts -->
<div id="quiz-prompt"></div>
</body>
</html>