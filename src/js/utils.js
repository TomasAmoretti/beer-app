export const parseRequestUrl = () => {
    const url = window.location.hash.toLocaleLowerCase();
    const request = url.split("/");
    return {
        resource: request[0],
        id: request[1],
        action: request[2],
    };
}

export const priceFormatter = (value) => {
    let newValue = (value / 100).toFixed(2);
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        maximumFractionDigits: 3,
        currency: "USD",
    });

    return formatter.format(newValue);
};

export const getData = async (url) => {
    let response = false;
    try{
    response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
        }
    });
    }catch (error){
        console.log("Error al traer prodctos: ",error)
    }

    if (!response) {
        return response;
    } else {
        return response.json();
    }
}

//Jquery
export const getDataJquery = async (url) => {
    const response = await $.ajax({
        headers: {
            "Content-Type": "application/json",
        },
        url: url,
        type: 'GET',
        success: function (data) {
            return (Object.assign({}, data));
        },
        error: function (data) {
            console.log("Error: ", data);
            return false;
        }
    })

    return response;
}

export default parseRequestUrl;