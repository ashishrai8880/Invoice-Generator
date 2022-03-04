console.log("chal rha hia");

function generateInvoice(){
    let name = document.getElementById('name').value;
    let quantity = document.getElementById('quantity').value;
    let price = document.getElementById('price').value;


    var data = {
    
            "images": {
                "logo": "https://public.easyinvoice.cloud/img/logo_en_original.png",
                "background": "https://public.easyinvoice.cloud/img/watermark-draft.jpg"
            },
            // Your own data
            "sender": {
                "company": "Sample Corp",
                "address": "Sample Street 123",
                "zip": "1234 AB",
                "city": "Sampletown",
                "country": "Samplecountry"
                
            },
            // Your recipient
            "client": {
                "company": "Client Corp",
                "address": "Clientstreet 456",
                "zip": "4567 CD",
                "city": "Clientcity",
                "country": "Clientcountry"
                
            },
            "information": {
                "number": "2021.0001",
                "date": "12-12-2021",
                "due-date": "31-12-2021"
            },
            "products": [
                {
                    "quantity": quantity,
                    "description": name,
                    "tax-rate": 6,
                    "price": price
                }
               
            ],
            "bottom-notice": "Kindly pay your invoice within 15 days."    
        };

        easyinvoice.createInvoice(data, async function (result) {

            // await fs.writeFileSync('invoice.pdf' , result.pdf , 'base64');
            easyinvoice.download('invoice.pdf');
        });

}

document.getElementById('submit').addEventListener('click' , generateInvoice);

 