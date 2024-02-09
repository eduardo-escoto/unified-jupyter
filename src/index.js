import { unified } from "unified";
import fs from "fs";
/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('unified').Parser<Root>} Parser
 * @typedef {import('unified').Processor<Root>} Processor
 */
/**
 * @typedef {Omit<FromMarkdownOptions, 'extensions' | 'mdastExtensions'>} Options
 */
// For cell type code: use ast to create the code ast for the specific language
const fileData = fs.readFileSync("example.ipynb", "utf8");
/**
 * Aadd support for parsing from markdown.
 *
 * @param {Readonly<Options> | null | undefined} [options]
 *   Configuration (optional).
 * @returns {undefined}
 *   Nothing.
 */
function parseJSON(options = {}) {
    /** @type {Processor} */
    // @ts-expect-error: TS in JSDoc generates wrong types if `this` is typed regularly.
    const self = this;
    self.parser = parser;
    /**
     * @type {Parser}
     */
    function parser(doc) {
        const parsed_doc = JSON.parse(doc);
        // console.log(parsed_doc);
        return { type: "root", children: parsed_doc.cells, data: parsed_doc.metadata };
    }
}
function toMDAST() {
    return (tree, file) => {
        console.log(tree);
        return tree;
    };
}
function rawOutput() {
    /** @type {Processor} */
    // @ts-expect-error: TS in JSDoc generates wrong types if `this` is typed regularly.
    const self = this;
    self.compiler = compiler;
    function compiler(doc) {
        // console.log(doc)
        return doc;
    }
}
const out = unified()
    .use(parseJSON)
    .use(toMDAST)
    .use(rawOutput)
    .processSync(fileData);
// console.log(out);
//# sourceMappingURL=index.js.map