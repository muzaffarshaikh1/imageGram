export const validate = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);

        // console.log(JSON.stringify(result, null, 2));

        if (!result.success) {
            // Convert the stringified error array back to JS array
            let parsedErrors = [];
            try {
              parsedErrors = JSON.parse(result.error.message);
            } catch (err) {
              console.error("Error parsing Zod error message:", err);
            }
      
            // Extract just the messages
            const errorMessages = parsedErrors.map(err => err.message);
      
            return res.status(400).json({
              success: false,
              message: "Validation Error",
              errors: errorMessages,
            });
        }

        next();
    };
};
