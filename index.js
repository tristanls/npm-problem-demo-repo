"use strict";

const existingRepo = require("in-node-modules-folder");

module.exports = () => existingRepo();

if (require.main === module)
{
    module.exports();
}
