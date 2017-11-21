/**
 * 地形类
 * @constructor
 */
var Terrain = function (){
    var geo = new THREE.BoxGeometry(250, 400, 10);
    var mat = new THREE.MeshPhongMaterial({
        color:Colors.green,
        // transparent: true,
        flatShading: THREE.FlatShading,
    });

    this.mesh = new THREE.Mesh(geo, mat);

    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;

};

//树
var Tree = function (){

};