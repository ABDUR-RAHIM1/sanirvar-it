
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import 'katex/dist/katex.min.css'; // math rendering এর জন্য

const MarkdownRenderer = ({ content }) => {
    return (
        <div className="markdown prose max-w-full ">
          
            <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeKatex, rehypeRaw]}
                children={content}
                components={{
                    table: ({ node, ...props }) => (
                        <div className="table-wrapper">
                            <table {...props} />
                        </div>
                    ),
                }}
            /> 
        </div>
    );
};

export default MarkdownRenderer;
