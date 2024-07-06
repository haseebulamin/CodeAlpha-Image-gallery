let all = document.getElementById("All")
        let family = document.getElementById("family")
        let child = document.getElementById("child")
        let nature = document.getElementById("nature")
        
        all.style.backgroundColor="orange";

        const family1 = ()=>{
            family.style.backgroundColor = "orange";
            all.style.backgroundColor = "#8080801f";
            child.style.backgroundColor = "#8080801f";
            nature.style.backgroundColor = "#8080801f";
        }
        const child1 = ()=>{
            family.style.backgroundColor = "#8080801f";
            all.style.backgroundColor = "#8080801f";
            child.style.backgroundColor = "orange";
            nature.style.backgroundColor = "#8080801f";
        }
        const nature1 = ()=>{
            family.style.backgroundColor = "#8080801f";
            all.style.backgroundColor = "#8080801f";
            child.style.backgroundColor = "#8080801f";
            nature.style.backgroundColor = "orange";
        }
        const All1 = ()=>{
            family.style.backgroundColor = "#8080801f";
            all.style.backgroundColor = "orange";
            child.style.backgroundColor = "#8080801f";
            nature.style.backgroundColor = "#8080801f";
        }