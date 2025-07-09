.PHONY: all

deploy: sync-nuxt-config pack-races
	git add racelist-fe/public/races.json racelist-fe/public/min.races.json racelist-fe/nuxt.config.ts && git cs "update races"
	git pull origin main --autostash --rebase
	git push origin main

pack-races:
	cd racelist-fe/public && jq -c . races.json > min.races.json
	cd ../..

sync-nuxt-config:
	cd ./scripts && ./update-routes.sh && cd ..
