var scrollFunc=function(e){
    e=e || window.event;
    if(e.wheelDelta){//IE/Opera/Chrome
        var data= e.wheelDelta;
        console.log(createjs.Ease.linear);
        if (data > 0) {
            createjs.Tween.get(camera.position).to({x:camera.position.x, y: camera.position.y += 15, z: camera.position.z -= 15}, 500 ,createjs.Ease.linear);
        } else {
            createjs.Tween.get(camera.position).to({x:camera.position.x, y: camera.position.y -= 15, z: camera.position.z += 15}, 500, createjs.Ease.getPowIn(2.2));
        }
    }else if(e.detail){//Firefox
        console.log(e.detail);
    }
} 