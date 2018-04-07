//

"use strict"

const twilio = require( "twilio" )

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').load();
}

//
// console.log( process.env )

console.log( process.env[ "TWILIO_AUTH_TOKEN" ] )
const client = require('twilio')( process.env[ "TWILIO_ACCOUNT_SID" ], process.env[ "TWILIO_AUTH_TOKEN" ] )


client.messages.create({
	body: `Greetings! The current time is: XXXXXX CJD5PF591PREY2M`,
	to: '+1 209 210 4311',  // Text this number
	// to: "+15056952591",
	from: "+14158437202", // From a valid Twilio number
})
.then((message) => console.log(message.sid), (err) => console.log( err ) );
