MSG='push to HEAD master'

.SILENT:

pushmaster:
	git status ;\
	git add . ;\
	git commit -m "$(MSG)" ;\
	git push origin HEAD:master ;\
