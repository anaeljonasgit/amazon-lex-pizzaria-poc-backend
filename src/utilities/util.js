// Nativo do pattern, ainda preciso estudar.

module.exports = {
    createResponse: {
        text: ({ type, event, sessionAttributes, messages }) => {
            return {
                "sessionState": {
                    "dialogAction": {
                        "type": type,
                    },
                    "intent": {
                        "name": event.sessionState.intent.name,
                        "state": event.sessionState.intent.state
                    },
                    "sessionAttributes": sessionAttributes,
                },
                "messages": messages
            }
        }
    },

    getSlots(event) {
        return event.sessionState.intent.slots
    },

    getSlot(event, slotName) {
        const slots = module.exports.getSlots(event);
        if (slots && slots[slotName]) {
            return slots[slotName].value.interpretedValue
        } else {
            return null;
        };
    },

    getSessionAttributes(event) {
        const sessionState = event.sessionState;
        if (sessionState.sessionAttributes) {
            return sessionState["SessionAttributes"];
        } else {
            return {};
        };
    },

    textResponse({ intentName, messages, sessionAttributes }) {
        return {
            "sessionState": {
                "dialogAction": {
                    "type": "Close",
                    
                },
                "intent": {
                    "name": intentName,
                    "state": "Fulfilled"
                },
                "sessionAttributes": sessionAttributes,
            },
            "messages": messages
        }
    },

    cardResponse(messages, cardTitle, cardButtons, slotToElicit, intentName, sessionAttributes ) {
        return {
            "messages": [
                messages,
                {
                    "contentType": "ImageResponseCard",
                    "imageResponseCard": {
                        "title": "teste titulo",
                        // "imageUrl": "https://cdbpagbank.s3.amazonaws.com/logo.jpg",
                        // "buttons": cardButtons
                    }
                },
                {
                    "contentType": "ImageResponseCard",
                    "imageResponseCard": {
                    "title": cardTitle,
                        // "imageUrl": "https://cdbpagbank.s3.amazonaws.com/logo.jpg",
                        "buttons": cardButtons
                    }
                },
                {
                    "contentType": "ImageResponseCard",
                    "imageResponseCard": {
                        "title": cardTitle,
                        "imageUrl": "https://sandbox.api.pagseguro.com/qrcode/QRCO_F8809F4C-3A60-420F-988E-7B7ED59E6198/png",
                        // "buttons": cardButtons
                    }
                },
                {
                    "contentType": "ImageResponseCard",
                    "imageResponseCard": {
                        "title": cardTitle,
                        "imageUrl": "https://cdbpagbank.s3.amazonaws.com/qr.png",
                        // "buttons": cardButtons
                    }
                },
                {
                    "contentType": "ImageResponseCard",
                    "imageResponseCard": {
                        "title": cardTitle,
                        "imageUrl": "https://cdbpagbank.s3.amazonaws.com/logo.jpg",
                        // "buttons": cardButtons
                    }
                },
                {
                    "contentType": "ImageResponseCard",
                    "imageResponseCard": {
                        "title": cardTitle,
                        "imageUrl": "https://cdbpagbank.s3.amazonaws.com/logo.jpg",
                        // "buttons": cardButtons
                    }
                },
                {
                    "contentType": "ImageResponseCard",
                    "imageResponseCard": {
                        "title": cardTitle,
                        "imageUrl": "https://cdbpagbank.s3.amazonaws.com/logo.jpg",
                        // "buttons": cardButtons
                    }
                },
                {
                    "contentType": "ImageResponseCard",
                    "imageResponseCard": {
                        "title": cardTitle,
                        "imageUrl": "https://cdbpagbank.s3.amazonaws.com/logo.jpg",
                        // "buttons": cardButtons
                    }
                },
                {
                    "contentType": "ImageResponseCard",
                    "imageResponseCard": {
                        "title": cardTitle,
                        "imageUrl": "https://cdbpagbank.s3.amazonaws.com/logo.jpg",
                        // "buttons": cardButtons
                    }
                },
                {
                    "contentType": "ImageResponseCard",
                    "imageResponseCard": {
                        "title": cardTitle,
                        "imageUrl": "https://cdbpagbank.s3.amazonaws.com/logo.jpg",
                        // "buttons": cardButtons
                    }
                },
                {
                    "contentType": "ImageResponseCard",
                    "imageResponseCard": {
                        "title": cardTitle,
                        "imageUrl": "https://cdbpagbank.s3.amazonaws.com/logo.jpg",
                        // "buttons": cardButtons
                    }
                },
            ],
            "sessionState": {
                "dialogAction": {
                    "type": "ElicitSlot",
                    "slotToElicit": slotToElicit
                },
                "intent": {
                    "name": intentName,
                    "slots": {
                        "menuSlot": null
                    },
                    "state": "InProgress",
                    "confirmationState": "None"
                },
                "sessionAttributes": sessionAttributes,
                "originatingRequestId": "36a9799a-9a19-45b6-9b38-b94057cd1a65"
            }
        }
    }
};