#!/bin/bash
if [ "${STAGE}" == "prod" ]; then
    echo "Running in production mode..."
    # Execute production-specific commands
    hypercorn main:app --bind "[::]:${BACKEND_PORT}"
else
    echo "Running in development mode..."
    # Execute development-specific commands
    /bin/bash
fi