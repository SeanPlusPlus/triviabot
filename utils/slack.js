const getPayload = (data, prompt) => {
	const { text, answers, answer, error } = data
	if (error) {
		return {
			"blocks": [
				{
					"type": "header",
					"text": {
						"type": "plain_text",
						"text": " :warning: GPT3 Question Generated but not parsed",
						"emoji": true
					}
				},
				{
					"type": "divider"
				},
				{
					"type": "section",
					"text": {
						"type": "mrkdwn",
						"text": prompt.text
					}
				},
				{
					"type": "divider"
				},
				{
					"type": "section",
					"text": {
						"type": "mrkdwn",
						"text": data.gpt3output
					}
				},
			]
		}
	}
	return {
		"blocks": [
			{
				"type": "header",
				"text": {
					"type": "plain_text",
					"text": ":white_check_mark: GPT3 Question Generated",
					"emoji": true
				}
			},
			{
				"type": "divider"
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
				"type": "divider"
			},
			{
				"type": "section",
				"fields": [
					{
						"type": "mrkdwn",
						"text": answers[0].text
					},
					{
						"type": "mrkdwn",
						"text": answers[1].text
					}
				]
			},
			{
				"type": "section",
				"fields": [
					{
						"type": "mrkdwn",
						"text": answers[2].text
					},
					{
						"type": "mrkdwn",
						"text": answers[3].text
					}
				]
			},
			{
				"type": "divider"
			},
			{
				"type": "section",
				"fields": [
					{
						"type": "mrkdwn",
						"text": "*Category:*\n" + prompt.category.name
					},
					{
						"type": "mrkdwn",
						"text": "*Supplement:*\n" + prompt.supplement
					}
				]
			},
			{
				"type": "divider"
			},
		]
	}
}

export default getPayload