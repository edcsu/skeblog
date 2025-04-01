const handler = (req, res) => {
    if (req.method === "POST") {
        const { email, name, message } = req.body
        let errors = []
        if (!email || email.trim() === "" || !email.includes('@') ) {
            errors.push("Email is required")
        }
        
        if (!name || name.trim() === "" ) {
            errors.push("Name is required")
        }
        
        if (!message || message.trim() === "" ) {
            errors.push("The message is required")
        }

        if (errors.length > 0) {
            return res.status(400)
                        .json({
                            success : false,
                            data : {
                                errors
                            }
                        })
        }

        const newMessage = {
            email,
            name,
            message
        }
        console.log(newMessage)
        return res.status(201)
                    .json({
                        success : true,
                        data : {
                            newMessage,
                            message: "Added a message successfully"
                        }
                    })
    }
}