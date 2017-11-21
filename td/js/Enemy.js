var temx = 0;

var Enemy = function (){
    this.mesh = new THREE.Object3D();
    var geo = new THREE.TorusGeometry(4, 0.1 ,8 ,7);

    var mat = new THREE.MeshPhongMaterial({
        color: Colors.white,
        flatShading: THREE.FlatShading,
    });

    //创建一个圆 ， 作为眼
    var geo1 = new THREE.SphereGeometry(2, 8, 6);

    var mat1 = new THREE.MeshPhongMaterial({
        color:Colors.red,
        flatShading: THREE.FlatShading,
    });

    this.eye = new THREE.Mesh(geo1, mat1);

    this.mesh.add(this.eye);

    this.yao_list = [];

    //批量添加几个腰
    for (var i = 0; i < 10; i++) {
        var yao = new THREE.Mesh(geo, mat);
        yao.rotation.y += 5 + Math.random() * 90;

        yao.castShadow = true;   //设置阴影
        yao.receiveShadow = true;
        this.yao_list.push(yao);

        this.mesh.add(yao);
    }

    //敌人的动画
    this.updateYao = function (){
        temx += 0.02;
        var positionz = Math.sin(temx) / 11;
        this.mesh.position.z += positionz;

        for (var i = 0; i < this.yao_list.length; i++) {
            this.yao_list[i].rotation.z += 0.02;
            this.yao_list[i].rotation.y += 0.02;
            this.yao_list[i].rotation.x += 0.02;
        }
    };



};