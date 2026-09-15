Dev10 Collective

Whenever editing a command definition (name, description, etc.), run 'node deploy-command.js'. This
is because the Discord API needs to know the definition of the command. In addition, Discord only allows
updating commands a limited amount of time per day. NOTE: this does not include how a command's execution works.
Updating how a command responds does NOT require running 'deploy-command.js'.