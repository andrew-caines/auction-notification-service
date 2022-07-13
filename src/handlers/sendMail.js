import AWS from 'aws-sdk';
const ses = new AWS.SES({ region: process.env.AUCTIONS_TABLE_NAME });

async function sendMail(event, context) {
  //console.log(`event= ${JSON.stringify(event)}`);

  const record = event.Records[0]; //Hard coded to 1 for now.
  console.log(record);
  const email = JSON.parse(record.body);
  const { subject, body, recipient } = email;
  const html_body = ``;
  const params = {
    Source: 'andrew.p.caines@gmail.com',
    Destination: {
      ToAddresses: [recipient]
    },
    Message: {
      Body: {
        Html: {
          Charset:"UTF-8",
          Data: html_body
        },
        Text: {
          Data: body
        }
      },
      Subject: {
        Data: subject
      }
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }

  return event;
}

export const handler = sendMail;


