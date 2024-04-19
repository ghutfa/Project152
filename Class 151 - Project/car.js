AFRAME.registerComponent("moving", {
    schema: {
        rotationY: {type: "number", default: 0},
        
    },
    tick: function(){
        window.addEventListener("click", ()=>{
            this.data.rotationY = 1 
        })
        rotation = this.el.getAttribute("rotation")
        rotation.y = rotation.y + this.data.rotationY
        this.el.setAttribute("rotation", {x: rotation.x, y: rotation.y, z: rotation.z})
        
    }

})