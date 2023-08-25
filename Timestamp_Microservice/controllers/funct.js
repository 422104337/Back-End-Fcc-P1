const moment = require("moment");


const method = (req, res) => {
    // Obtener la fecha del cuerpo de la solicitud
    let date_string = req.body.date; // Supongo que el campo en el cuerpo de la solicitud se llama 'date'

    // Verificar si no se proporcionó ninguna fecha
    if (!date_string) {
        return res.status(200).json({"unix": moment().unix(), "utc": moment().utc().format()});
    }

    try {
        let longitud = date_string.length;

        if (longitud === 10) {
            // Convertir la fecha a un objeto Date
            let date_real = new Date(date_string);
            
            return res.status(200).json({"unix": Math.floor(date_real.getTime() / 1000), "utc": date_real.toUTCString()});

        } else if (longitud > 10) {
            let conv = parseInt(date_string);

            // Convertir el tiempo Unix a un objeto Date
            let date = new Date(conv * 1000);
            
            return res.status(200).json({"unix": conv, "utc": date.toUTCString()});

        } else {
            return res.status(500).json({ error : "Invalid Date" });
        }

    } catch (error) {
        return res.status(404).json({ error : "Invalid Date" });
    }
}

// Fin del método





//Export module
module.exports = {
    method
}


