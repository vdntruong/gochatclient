MSG='push to HEAD master'

.SILENT:

# make pushmaster -e MSG="..."
pushmaster:
	git status ;\
	git add . ;\
	git commit -m "$(MSG)" ;\
	git push origin HEAD:master ;\
