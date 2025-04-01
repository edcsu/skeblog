import { connectDatabase, insertDocument } from "../../../helpers/dbutil"

const handler = async (req, res) => {
    if (req.method === "POST") {
        const { email, name, message } = req.body
        let errors = []
        console.log(email, name, message)
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
        
        let client

        try {
            client = await connectDatabase()
        } catch (error) {
            return res.status(500)
                        .json({
                            success : false,
                            data : {
                                message: "Failed to connect to db"
                            }
                        })
        }

        try {
            const result = await insertDocument(client, 'messages', newMessage)
            await client.close()                
            newMessage._id = result.insertedId
            return res.status(201)
            .json({
                success : true,
                data : {
                    newMessage,
                    message: "Added a message successfully"
                }
            })
        } catch (error) {
            await client.close()                
            return res.status(500)
                        .json({
                            success : false,
                            data : {
                                message: "Failed to save to message"
                            }
                        })
        }
    }
}

export default handler