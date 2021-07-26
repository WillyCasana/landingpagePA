
app.controller('mapaController',function($scope,$http,$sce, $window){

    $scope.trustSrc=function(src){
        return $sce.trustAsResourceUrl(src);
    }

    var dpto={};
    $http({
        url:'js/dept.json',
        method:'GET',
    }).then(function(response){
       
        dpto = response.data.departamento;
        console.log(dpto);
    })

//    console.log('El listado : ' + deptList);
    //Inicializacion:
    $scope.nomSub="";
    $scope.mesaSub="";
    var indexAct=0;


    $scope.dpto=dpto;
    $scope.getSlider = function (index) {

        indexAct = parseInt(index);
        console.log(indexAct);
        console.log( dpto);
        $scope.ciudadTitulo=dpto[indexAct].ciudad;
        $scope.videos=dpto[indexAct].videos;

        //$scope.videosAux=dpto[i].videos;
        $scope.videosAux=dpto[indexAct].videos;

        console.log( dpto[indexAct].videos[0].link);


        //valores iniciales:
        $scope.nomSub = dpto[indexAct].videos[0].nombre;
        $scope.mesaSub=dpto[indexAct].videos[0].area;

        //carousel-item utilizar el jQuery para desactivar todos y colocar como active al primero(0)
        //luego tambien marcar el primer radiobutton
        //Probar en el evento despues del popup a ver si toma efecto:
        // $('.carousel-item active').addClass('carousel-item').removeClass('carousel-item active');
        // $('carousel-item').first().attr('class','carousel-item active');

        


        $('#exampleModal').modal('show');

        // if(data == "1")
        // {
        //     data = "Chiclayo";
        //     $('#exampleModal').modal('show')

        // }
        // else if(data == "2")
        // {
        //     data = "Trujillo";
        // }
        // else if(data == "3")
        // {
        //     data = "Lima";
        // }
        // else if(data == "4")
        // {
        //     data = "Huancayo";
        // }
        // else if(data == "5")
        // {
        //     data = "Ica";
        // }
        // else if(data == "6")
        // {
        //     data = "Arequipa";
        // }



        $scope.transitar= function(val){
        
        //   $scope.dpto='Chiclayo';
        //   $scope.usuario= 'Luz Maria';
        //   $scope.mesa='Innovación';
        var valInt = parseInt(val);

        $scope.nomSub = dpto[indexAct].videos[valInt].nombre;
        $scope.mesaSub=dpto[indexAct].videos[valInt].area;

          $("#carouselExampleCaptions").carousel(valInt);
        }

    
    }
})