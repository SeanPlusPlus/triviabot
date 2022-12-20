const getPayload = (data) => {
	const { text, answers, answer } = data
	if (!text || !answers || answers.length !== 4) {
		return {
			text: JSON.stringify(data)
		}
	}
	return {
		"blocks": [
			{
				"type": "header",
				"text": {
					"type": "plain_text",
					"text": "New GPT3 Question Generated",
					"emoji": true
				}
			},
			{
				"type": "section",
				"fields": [
					{
						"type": "mrkdwn",
						"text": "*Text:*\n" + text
					},
					{
						"type": "mrkdwn",
						"text": "*Answer:*\n" + answer 
					},
				]
			},
			{
				"type": "section",
				"fields": [
					{
						"type": "mrkdwn",
						"text": "*A:*\n" + answers[0].text
					},
					{
						"type": "mrkdwn",
						"text": "*B:*\n" + answers[1].text
					}
				]
			},
			{
				"type": "section",
				"fields": [
					{
						"type": "mrkdwn",
						"text": "*C:*\n" + answers[2].text
					},
					{
						"type": "mrkdwn",
						"text": "*D:*\n" + answers[3].text
					}
				]
			},
		]
	}
}

export default getPayload