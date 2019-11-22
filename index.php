<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Prueba de PHP</title>
	<link rel="stylesheet" href="styles.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
</head>
<body>
	<section class="header">
		<h1 class="text-center text-regular">Prueba de realización en PHP</h1>
	</section>
	
	<section class="contenido">
		<div class="contenedor">
			   <!-- table -->
		<h3 class="card-header" id="monthAndYear"></h3>
        <div class="table" id="calendar">
            
        <div class="encabezado">
			<div class="col"><span>SUN</span></div>
			<div class="col"><span>MON</span></div>
			<div class="col"><span>TUE</span></div>
			<div class="col"><span>WED</span></div>
			<div class="col"><span>THU</span></div>
			<div class="col"><span>FRI</span></div>
			<div class="col"><span>SAT</span></div>
         </div>
            <div id="calendario">

			</div>
			
           </div>
		</div>
      </section>

        <div class="form-inline">
		<div class="deskstop text-center">
			<button type="" onclick="antes()">Anterior</button>
			<button type="" onclick="siguientes()">Siguiente</button>
			</div>
			<div class="mobile">
			<i class="fa fa-chevron-left left fa-1x" onclick="antes()" aria-hidden="true"></i>
	    	<i class="fa fa-chevron-right right fa-1x" onclick="siguientes()" aria-hidden="true"></i>
		</div>
          
		</div>
		<form class="form-inline">
            <div  style="display:none;"  id="month" > </div>
            <div style="display:none;"  name="year" id="year">  </div>
		</form>
	

   <br>
	<section class="footer">
		<h5 class="text-center text-regular">CopyRight 2019 @ Leonardo Pernett</h5>
	</section>



	<script src="main.js" type="text/javascript"></script> 

</body>
</html>