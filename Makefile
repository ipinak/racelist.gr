.PHONY: all

deploy: pack-races
	git add races.json min.races.json && git cs "update races"
	git pull origin main --autostash --rebase
	git push origin main

pack-races:
	cd racelist-fe/public && jq -c . races.json > min.races.json
	cd ../..