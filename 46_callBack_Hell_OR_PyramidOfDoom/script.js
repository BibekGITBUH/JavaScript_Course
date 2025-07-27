// Callbacks hell and pyramid of doom problems:    so solution is promises
function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function() {
            console.log("Loaded script with SRC: " + src)
            callback(null, src);   // if my mistake null is true then : even after correctly script error will show 
    }
    script.onerror = function() {
            console.log("Error loading script with SRC: " + src);
            callback(new Error("Src got some error"))
    }
    document.body.appendChild(script);
}

function hello(error, src) {
    if (error) {
            console.log(error)
            return
    }
    alert('Hello World!' + src);
}



// pyramid of doom problems: as they goes on increasing and makes code complexity 
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
    if (error) {
            console.log(error)
            sendEmergencyMessageToCeo();
            return
    }
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap2.bundle.min.js", function goodmorning(error, src) {
            if (error) {
                    console.log(error)
                    sendEmergencyMessageToCeo();
                    return
            }
            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap3.bundle.min.js", function goodmorning(error, src) {
                    if (error) {
                            console.log(error)
                            sendEmergencyMessageToCeo();
                            return
                    }
                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap4.bundle.min.js", function goodmorning(error, src) {
                            if (error) {
                                    console.log(error)
                                    sendEmergencyMessageToCeo();
                                    return
                            }
                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap5.bundle.min.js", function goodmorning(error, src) {
                                    if (error) {
                                            console.log(error)
                                            sendEmergencyMessageToCeo();
                                            return
                                    }
                                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap6.bundle.min.js", function goodmorning(error, src) {
                                            if (error) {
                                                    console.log(error)
                                                    sendEmergencyMessageToCeo();
                                                    return
                                            }
                                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap7.bundle.min.js", function goodmorning(error, src) {
                                                    if (error) {
                                                            console.log(error)
                                                            sendEmergencyMessageToCeo();
                                                            return
                                                    }
                                                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap8.bundle.min.js", function goodmorning(error, src) {
                                                            if (error) {
                                                                    console.log(error)
                                                                    sendEmergencyMessageToCeo();
                                                                    return
                                                            }
                                                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap9.bundle.min.js", function goodmorning(error, src) { })
                                                    })
                                            })
                                    })
                            })
                    })
            })
    })
})
// Chintu