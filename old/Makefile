.PHONY: all

deploy:
	jq -c . races.json > min.races.json
	git add races.json min.races.json && git cs "update races"
	git pull origin main --autostash --rebase
	git push origin main
