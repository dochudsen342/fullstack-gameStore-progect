"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.4.2",
    "engineVersion": "94a226be1cf2967af2541cca5529f0f7ba866919",
    "activeProvider": "postgresql",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = \"prisma-client\"\n  output   = \"./generated\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel User {\n  id       Int      @id @default(autoincrement())\n  email    String   @unique\n  password String\n  profile  Profile?\n\n  @@map(\"Users\")\n}\n\nmodel Profile {\n  id       Int     @id @default(autoincrement())\n  userId   Int     @unique\n  nickname String  @unique\n  avatar   String?\n  birthday String?\n  user     User    @relation(fields: [userId], references: [id])\n\n  @@map(\"profiles\")\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"profile\",\"kind\":\"object\",\"type\":\"Profile\",\"relationName\":\"ProfileToUser\"}],\"dbName\":\"Users\"},\"Profile\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"nickname\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"avatar\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"birthday\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"ProfileToUser\"}],\"dbName\":\"profiles\"}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"user\",\"profile\",\"User.findUnique\",\"User.findUniqueOrThrow\",\"orderBy\",\"cursor\",\"User.findFirst\",\"User.findFirstOrThrow\",\"User.findMany\",\"data\",\"User.createOne\",\"User.createMany\",\"User.createManyAndReturn\",\"User.updateOne\",\"User.updateMany\",\"User.updateManyAndReturn\",\"create\",\"update\",\"User.upsertOne\",\"User.deleteOne\",\"User.deleteMany\",\"having\",\"_count\",\"_avg\",\"_sum\",\"_min\",\"_max\",\"User.groupBy\",\"User.aggregate\",\"Profile.findUnique\",\"Profile.findUniqueOrThrow\",\"Profile.findFirst\",\"Profile.findFirstOrThrow\",\"Profile.findMany\",\"Profile.createOne\",\"Profile.createMany\",\"Profile.createManyAndReturn\",\"Profile.updateOne\",\"Profile.updateMany\",\"Profile.updateManyAndReturn\",\"Profile.upsertOne\",\"Profile.deleteOne\",\"Profile.deleteMany\",\"Profile.groupBy\",\"Profile.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"userId\",\"nickname\",\"avatar\",\"birthday\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"contains\",\"startsWith\",\"endsWith\",\"not\",\"email\",\"password\",\"is\",\"isNot\",\"connectOrCreate\",\"upsert\",\"disconnect\",\"delete\",\"connect\",\"set\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "ZRUgBwIAAEcAIC4AAEQAMC8AAAYAEDAAAEQAMDECAAAAAUEBAAAAAUIBAEYAIQEAAAABACAJAQAAQgAgLgAAQAAwLwAAAwAQMAAAQAAwMQIARQAhMgIARQAhMwEARgAhNAEAQQAhNQEAQQAhAQAAAAMAIAEAAAABACAHAgAARwAgLgAARAAwLwAABgAQMAAARAAwMQIARQAhQQEARgAhQgEARgAhAQIAAGAAIAMAAAAGACAFAAAHADAGAAABACADAAAABgAgBQAABwAwBgAAAQAgAwAAAAYAIAUAAAcAMAYAAAEAIAQCAABfACAxAgAAAAFBAQAAAAFCAQAAAAEBCgAACwAgAzECAAAAAUEBAAAAAUIBAAAAAQEKAAANADABCgAADQAwBAIAAFkAIDECAFAAIUEBAE4AIUIBAE4AIQIAAAABACAKAAAQACADMQIAUAAhQQEATgAhQgEATgAhAgAAAAYAIAoAABIAIAIAAAAGACAKAAASACADAAAAAQAgEQAACwAgEgAAEAAgAQAAAAEAIAEAAAAGACAFFwAAVAAgGAAAVQAgGQAAWAAgGgAAVwAgGwAAVgAgBi4AAEMAMC8AABkAEDAAAEMAMDECADUAIUEBADYAIUIBADYAIQMAAAAGACAFAAAYADAWAAAZACADAAAABgAgBQAABwAwBgAAAQAgCQEAAEIAIC4AAEAAMC8AAAMAEDAAAEAAMDECAAAAATICAAAAATMBAAAAATQBAEEAITUBAEEAIQEAAAAcACABAAAAHAAgAwEAAFMAIDQAAEgAIDUAAEgAIAMAAAADACAFAAAfADAGAAAcACADAAAAAwAgBQAAHwAwBgAAHAAgAwAAAAMAIAUAAB8AMAYAABwAIAYBAABSACAxAgAAAAEyAgAAAAEzAQAAAAE0AQAAAAE1AQAAAAEBCgAAIwAgBTECAAAAATICAAAAATMBAAAAATQBAAAAATUBAAAAAQEKAAAlADABCgAAJQAwBgEAAFEAIDECAFAAITICAFAAITMBAE4AITQBAE8AITUBAE8AIQIAAAAcACAKAAAoACAFMQIAUAAhMgIAUAAhMwEATgAhNAEATwAhNQEATwAhAgAAAAMAIAoAACoAIAIAAAADACAKAAAqACADAAAAHAAgEQAAIwAgEgAAKAAgAQAAABwAIAEAAAADACAHFwAASQAgGAAASgAgGQAATQAgGgAATAAgGwAASwAgNAAASAAgNQAASAAgCC4AADQAMC8AADEAEDAAADQAMDECADUAITICADUAITMBADYAITQBADcAITUBADcAIQMAAAADACAFAAAwADAWAAAxACADAAAAAwAgBQAAHwAwBgAAHAAgCC4AADQAMC8AADEAEDAAADQAMDECADUAITICADUAITMBADYAITQBADcAITUBADcAIQ0XAAA8ACAYAAA_ACAZAAA8ACAaAAA8ACAbAAA8ACA2AgAAAAE3AgAAAAQ4AgAAAAQ5AgAAAAE6AgAAAAE7AgAAAAE8AgAAAAFAAgA-ACEOFwAAPAAgGgAAPQAgGwAAPQAgNgEAAAABNwEAAAAEOAEAAAAEOQEAAAABOgEAAAABOwEAAAABPAEAAAABPQEAAAABPgEAAAABPwEAAAABQAEAOwAhDhcAADkAIBoAADoAIBsAADoAIDYBAAAAATcBAAAABTgBAAAABTkBAAAAAToBAAAAATsBAAAAATwBAAAAAT0BAAAAAT4BAAAAAT8BAAAAAUABADgAIQ4XAAA5ACAaAAA6ACAbAAA6ACA2AQAAAAE3AQAAAAU4AQAAAAU5AQAAAAE6AQAAAAE7AQAAAAE8AQAAAAE9AQAAAAE-AQAAAAE_AQAAAAFAAQA4ACEINgIAAAABNwIAAAAFOAIAAAAFOQIAAAABOgIAAAABOwIAAAABPAIAAAABQAIAOQAhCzYBAAAAATcBAAAABTgBAAAABTkBAAAAAToBAAAAATsBAAAAATwBAAAAAT0BAAAAAT4BAAAAAT8BAAAAAUABADoAIQ4XAAA8ACAaAAA9ACAbAAA9ACA2AQAAAAE3AQAAAAQ4AQAAAAQ5AQAAAAE6AQAAAAE7AQAAAAE8AQAAAAE9AQAAAAE-AQAAAAE_AQAAAAFAAQA7ACEINgIAAAABNwIAAAAEOAIAAAAEOQIAAAABOgIAAAABOwIAAAABPAIAAAABQAIAPAAhCzYBAAAAATcBAAAABDgBAAAABDkBAAAAAToBAAAAATsBAAAAATwBAAAAAT0BAAAAAT4BAAAAAT8BAAAAAUABAD0AIQ0XAAA8ACAYAAA_ACAZAAA8ACAaAAA8ACAbAAA8ACA2AgAAAAE3AgAAAAQ4AgAAAAQ5AgAAAAE6AgAAAAE7AgAAAAE8AgAAAAFAAgA-ACEINggAAAABNwgAAAAEOAgAAAAEOQgAAAABOggAAAABOwgAAAABPAgAAAABQAgAPwAhCQEAAEIAIC4AAEAAMC8AAAMAEDAAAEAAMDECAEUAITICAEUAITMBAEYAITQBAEEAITUBAEEAIQs2AQAAAAE3AQAAAAU4AQAAAAU5AQAAAAE6AQAAAAE7AQAAAAE8AQAAAAE9AQAAAAE-AQAAAAE_AQAAAAFAAQA6ACEJAgAARwAgLgAARAAwLwAABgAQMAAARAAwMQIARQAhQQEARgAhQgEARgAhQwAABgAgRAAABgAgBi4AAEMAMC8AABkAEDAAAEMAMDECADUAIUEBADYAIUIBADYAIQcCAABHACAuAABEADAvAAAGABAwAABEADAxAgBFACFBAQBGACFCAQBGACEINgIAAAABNwIAAAAEOAIAAAAEOQIAAAABOgIAAAABOwIAAAABPAIAAAABQAIAPAAhCzYBAAAAATcBAAAABDgBAAAABDkBAAAAAToBAAAAATsBAAAAATwBAAAAAT0BAAAAAT4BAAAAAT8BAAAAAUABAD0AIQsBAABCACAuAABAADAvAAADABAwAABAADAxAgBFACEyAgBFACEzAQBGACE0AQBBACE1AQBBACFDAAADACBEAAADACAAAAAAAAABSgEAAAABAUoBAAAAAQVKAgAAAAFLAgAAAAFMAgAAAAFNAgAAAAFOAgAAAAEFEQAAYQAgEgAAZAAgRQAAYgAgRgAAYwAgSQAAAQAgAxEAAGEAIEUAAGIAIEkAAAEAIAECAABgACAAAAAAAAcRAABaACASAABdACBFAABbACBGAABcACBHAAADACBIAAADACBJAAAcACAEMQIAAAABMwEAAAABNAEAAAABNQEAAAABAgAAABwAIBEAAFoAIAMAAAADACARAABaACASAABeACAGAAAAAwAgCgAAXgAgMQIAUAAhMwEATgAhNAEATwAhNQEATwAhBDECAFAAITMBAE4AITQBAE8AITUBAE8AIQMRAABaACBFAABbACBJAAAcACADAQAAUwAgNAAASAAgNQAASAAgAzECAAAAAUEBAAAAAUIBAAAAAQIAAAABACARAABhACADAAAABgAgEQAAYQAgEgAAZQAgBQAAAAYAIAoAAGUAIDECAFAAIUEBAE4AIUIBAE4AIQMxAgBQACFBAQBOACFCAQBOACEBAgQCAQEAAQAAAAUXAAcYAAgZAAkaAAobAAsAAAAAAAUXAAcYAAgZAAkaAAobAAsBAQABAQEAAQUXABAYABEZABIaABMbABQAAAAAAAUXABAYABEZABIaABMbABQDAgEEBQEHCAEICQEJCgELDAEMDgMNDwQOEQEPEwMQFAUTFQEUFgEVFwMcGgYdGwweHQIfHgIgIAIhIQIiIgIjJAIkJgMlJw0mKQInKwMoLA4pLQIqLgIrLwMsMg8tMxU"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await Promise.resolve().then(() => __importStar(require('node:buffer')));
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await Promise.resolve().then(() => __importStar(require("@prisma/client/runtime/query_compiler_fast_bg.postgresql.js"))),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await Promise.resolve().then(() => __importStar(require("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.js")));
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map