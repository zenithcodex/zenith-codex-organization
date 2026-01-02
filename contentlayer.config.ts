import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const News = defineDocumentType(() => ({
  name: "News",
  filePathPattern: `news/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    version: { type: "string", required: false },
    category: { type: "string", required: false },
    description: { type: "string", required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
    url: {
      type: "string",
      resolve: (doc) => `/news/${doc._raw.sourceFileName.replace(/\.mdx$/, "")}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [News],
});
