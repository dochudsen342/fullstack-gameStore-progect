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
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = \"prisma-client\"\n  output   = \"./generated\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel User {\n  id    Int     @id @default(autoincrement())\n  email String  @unique\n  name  String?\n  posts Post[]\n}\n\nmodel Post {\n  id        Int     @id @default(autoincrement())\n  title     String\n  content   String?\n  published Boolean @default(false)\n  author    User    @relation(fields: [authorId], references: [id])\n  authorId  Int\n}\n",
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
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"posts\",\"kind\":\"object\",\"type\":\"Post\",\"relationName\":\"PostToUser\"}],\"dbName\":null},\"Post\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"content\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"published\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"author\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"PostToUser\"},{\"name\":\"authorId\",\"kind\":\"scalar\",\"type\":\"Int\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"orderBy\",\"cursor\",\"author\",\"posts\",\"_count\",\"User.findUnique\",\"User.findUniqueOrThrow\",\"User.findFirst\",\"User.findFirstOrThrow\",\"User.findMany\",\"data\",\"User.createOne\",\"User.createMany\",\"User.createManyAndReturn\",\"User.updateOne\",\"User.updateMany\",\"User.updateManyAndReturn\",\"create\",\"update\",\"User.upsertOne\",\"User.deleteOne\",\"User.deleteMany\",\"having\",\"_avg\",\"_sum\",\"_min\",\"_max\",\"User.groupBy\",\"User.aggregate\",\"Post.findUnique\",\"Post.findUniqueOrThrow\",\"Post.findFirst\",\"Post.findFirstOrThrow\",\"Post.findMany\",\"Post.createOne\",\"Post.createMany\",\"Post.createManyAndReturn\",\"Post.updateOne\",\"Post.updateMany\",\"Post.updateManyAndReturn\",\"Post.upsertOne\",\"Post.deleteOne\",\"Post.deleteMany\",\"Post.groupBy\",\"Post.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"title\",\"content\",\"published\",\"authorId\",\"equals\",\"not\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"contains\",\"startsWith\",\"endsWith\",\"email\",\"name\",\"every\",\"some\",\"none\",\"is\",\"isNot\",\"connectOrCreate\",\"upsert\",\"createMany\",\"set\",\"disconnect\",\"delete\",\"connect\",\"updateMany\",\"deleteMany\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "cxYgBwQAAEkAIC4AAEUAMC8AAAkAEDAAAEUAMDECAAAAAUEBAAAAAUIBAEgAIQEAAAABACAJAwAATAAgLgAASgAwLwAAAwAQMAAASgAwMQIARgAhMgEARwAhMwEASAAhNCAASwAhNQIARgAhAgMAAG0AIDMAAE0AIAkDAABMACAuAABKADAvAAADABAwAABKADAxAgAAAAEyAQBHACEzAQBIACE0IABLACE1AgBGACEDAAAAAwAgAQAABAAwAgAABQAgAQAAAAMAIAEAAAABACAHBAAASQAgLgAARQAwLwAACQAQMAAARQAwMQIARgAhQQEARwAhQgEASAAhAgQAAGwAIEIAAE0AIAMAAAAJACABAAAKADACAAABACADAAAACQAgAQAACgAwAgAAAQAgAwAAAAkAIAEAAAoAMAIAAAEAIAQEAABrACAxAgAAAAFBAQAAAAFCAQAAAAEBCwAADgAgAzECAAAAAUEBAAAAAUIBAAAAAQELAAAQADABCwAAEAAwBAQAAF4AIDECAFYAIUEBAFMAIUIBAFQAIQIAAAABACALAAATACADMQIAVgAhQQEAUwAhQgEAVAAhAgAAAAkAIAsAABUAIAIAAAAJACALAAAVACADAAAAAQAgEgAADgAgEwAAEwAgAQAAAAEAIAEAAAAJACAGBQAAWQAgGAAAWgAgGQAAXQAgGgAAXAAgGwAAWwAgQgAATQAgBi4AAEQAMC8AABwAEDAAAEQAMDECADYAIUEBADcAIUIBADgAIQMAAAAJACABAAAbADAXAAAcACADAAAACQAgAQAACgAwAgAAAQAgAQAAAAUAIAEAAAAFACADAAAAAwAgAQAABAAwAgAABQAgAwAAAAMAIAEAAAQAMAIAAAUAIAMAAAADACABAAAEADACAAAFACAGAwAAWAAgMQIAAAABMgEAAAABMwEAAAABNCAAAAABNQIAAAABAQsAACQAIAUxAgAAAAEyAQAAAAEzAQAAAAE0IAAAAAE1AgAAAAEBCwAAJgAwAQsAACYAMAYDAABXACAxAgBWACEyAQBTACEzAQBUACE0IABVACE1AgBWACECAAAABQAgCwAAKQAgBTECAFYAITIBAFMAITMBAFQAITQgAFUAITUCAFYAIQIAAAADACALAAArACACAAAAAwAgCwAAKwAgAwAAAAUAIBIAACQAIBMAACkAIAEAAAAFACABAAAAAwAgBgUAAE4AIBgAAE8AIBkAAFIAIBoAAFEAIBsAAFAAIDMAAE0AIAguAAA1ADAvAAAyABAwAAA1ADAxAgA2ACEyAQA3ACEzAQA4ACE0IAA5ACE1AgA2ACEDAAAAAwAgAQAAMQAwFwAAMgAgAwAAAAMAIAEAAAQAMAIAAAUAIAguAAA1ADAvAAAyABAwAAA1ADAxAgA2ACEyAQA3ACEzAQA4ACE0IAA5ACE1AgA2ACENBQAAOwAgGAAAQwAgGQAAOwAgGgAAOwAgGwAAOwAgNgIAAAABNwIAQgAhOAIAAAAEOQIAAAAEOgIAAAABOwIAAAABPAIAAAABPQIAAAABDgUAADsAIBoAAEEAIBsAAEEAIDYBAAAAATcBAEAAITgBAAAABDkBAAAABDoBAAAAATsBAAAAATwBAAAAAT0BAAAAAT4BAAAAAT8BAAAAAUABAAAAAQ4FAAA-ACAaAAA_ACAbAAA_ACA2AQAAAAE3AQA9ACE4AQAAAAU5AQAAAAU6AQAAAAE7AQAAAAE8AQAAAAE9AQAAAAE-AQAAAAE_AQAAAAFAAQAAAAEFBQAAOwAgGgAAPAAgGwAAPAAgNiAAAAABNyAAOgAhBQUAADsAIBoAADwAIBsAADwAIDYgAAAAATcgADoAIQg2AgAAAAE3AgA7ACE4AgAAAAQ5AgAAAAQ6AgAAAAE7AgAAAAE8AgAAAAE9AgAAAAECNiAAAAABNyAAPAAhDgUAAD4AIBoAAD8AIBsAAD8AIDYBAAAAATcBAD0AITgBAAAABTkBAAAABToBAAAAATsBAAAAATwBAAAAAT0BAAAAAT4BAAAAAT8BAAAAAUABAAAAAQg2AgAAAAE3AgA-ACE4AgAAAAU5AgAAAAU6AgAAAAE7AgAAAAE8AgAAAAE9AgAAAAELNgEAAAABNwEAPwAhOAEAAAAFOQEAAAAFOgEAAAABOwEAAAABPAEAAAABPQEAAAABPgEAAAABPwEAAAABQAEAAAABDgUAADsAIBoAAEEAIBsAAEEAIDYBAAAAATcBAEAAITgBAAAABDkBAAAABDoBAAAAATsBAAAAATwBAAAAAT0BAAAAAT4BAAAAAT8BAAAAAUABAAAAAQs2AQAAAAE3AQBBACE4AQAAAAQ5AQAAAAQ6AQAAAAE7AQAAAAE8AQAAAAE9AQAAAAE-AQAAAAE_AQAAAAFAAQAAAAENBQAAOwAgGAAAQwAgGQAAOwAgGgAAOwAgGwAAOwAgNgIAAAABNwIAQgAhOAIAAAAEOQIAAAAEOgIAAAABOwIAAAABPAIAAAABPQIAAAABCDYIAAAAATcIAEMAITgIAAAABDkIAAAABDoIAAAAATsIAAAAATwIAAAAAT0IAAAAAQYuAABEADAvAAAcABAwAABEADAxAgA2ACFBAQA3ACFCAQA4ACEHBAAASQAgLgAARQAwLwAACQAQMAAARQAwMQIARgAhQQEARwAhQgEASAAhCDYCAAAAATcCADsAITgCAAAABDkCAAAABDoCAAAAATsCAAAAATwCAAAAAT0CAAAAAQs2AQAAAAE3AQBBACE4AQAAAAQ5AQAAAAQ6AQAAAAE7AQAAAAE8AQAAAAE9AQAAAAE-AQAAAAE_AQAAAAFAAQAAAAELNgEAAAABNwEAPwAhOAEAAAAFOQEAAAAFOgEAAAABOwEAAAABPAEAAAABPQEAAAABPgEAAAABPwEAAAABQAEAAAABA0MAAAMAIEQAAAMAIEUAAAMAIAkDAABMACAuAABKADAvAAADABAwAABKADAxAgBGACEyAQBHACEzAQBIACE0IABLACE1AgBGACECNiAAAAABNyAAPAAhCQQAAEkAIC4AAEUAMC8AAAkAEDAAAEUAMDECAEYAIUEBAEcAIUIBAEgAIUYAAAkAIEcAAAkAIAAAAAAAAAFLAQAAAAEBSwEAAAABAUsgAAAAAQVLAgAAAAFRAgAAAAFSAgAAAAFTAgAAAAFUAgAAAAEFEgAAbwAgEwAAcgAgSAAAcAAgSQAAcQAgTgAAAQAgAxIAAG8AIEgAAHAAIE4AAAEAIAAAAAAACxIAAF8AMBMAAGQAMEgAAGAAMEkAAGEAMEoAAGIAIEsAAGMAMEwAAGMAME0AAGMAME4AAGMAME8AAGUAMFAAAGYAMAQxAgAAAAEyAQAAAAEzAQAAAAE0IAAAAAECAAAABQAgEgAAagAgAwAAAAUAIBIAAGoAIBMAAGkAIAELAABuADAJAwAATAAgLgAASgAwLwAAAwAQMAAASgAwMQIAAAABMgEARwAhMwEASAAhNCAASwAhNQIARgAhAgAAAAUAIAsAAGkAIAIAAABnACALAABoACAILgAAZgAwLwAAZwAQMAAAZgAwMQIARgAhMgEARwAhMwEASAAhNCAASwAhNQIARgAhCC4AAGYAMC8AAGcAEDAAAGYAMDECAEYAITIBAEcAITMBAEgAITQgAEsAITUCAEYAIQQxAgBWACEyAQBTACEzAQBUACE0IABVACEEMQIAVgAhMgEAUwAhMwEAVAAhNCAAVQAhBDECAAAAATIBAAAAATMBAAAAATQgAAAAAQQSAABfADBIAABgADBKAABiACBOAABjADAAAgQAAGwAIEIAAE0AIAQxAgAAAAEyAQAAAAEzAQAAAAE0IAAAAAEDMQIAAAABQQEAAAABQgEAAAABAgAAAAEAIBIAAG8AIAMAAAAJACASAABvACATAABzACAFAAAACQAgCwAAcwAgMQIAVgAhQQEAUwAhQgEAVAAhAzECAFYAIUEBAFMAIUIBAFQAIQIEBgIFAAMBAwABAQQHAAAAAAUFAAgYAAkZAAoaAAsbAAwAAAAAAAUFAAgYAAkZAAoaAAsbAAwBAwABAQMAAQUFABEYABIZABMaABQbABUAAAAAAAUFABEYABIZABMaABQbABUGAgEHCAEICwEJDAEKDQEMDwENEQQOEgUPFAEQFgQRFwYUGAEVGQEWGgQcHQcdHg0eHwIfIAIgIQIhIgIiIwIjJQIkJwQlKA4mKgInLAQoLQ8pLgIqLwIrMAQsMxAtNBY"
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