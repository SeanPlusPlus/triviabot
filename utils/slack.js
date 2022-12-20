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
						"text": JSON.stringify(data)
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
							"text": "*Category:*\n" + prompt.category.name
						},
						{
							"type": "mrkdwn",
							"text": "*Supplement:*\n" + prompt.supplement
						}
					]
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
		]
	}
}

export default getPayload