#!/bin/bash
if [ "${STAGE}" == "prod" ]; then
    echo "Running in production mode..."
    # Execute production-specific commands
    npm run build;
else
    echo "Running in development mode..."
    # Execute development-specific commands
    /bin/bash
    # this is the command you want to run npm run dev -- --port ${FRONTEND_PORT} --host;
fi