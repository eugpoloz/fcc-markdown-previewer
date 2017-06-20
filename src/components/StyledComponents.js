import styled from "styled-components";
import MarkdownRenderer from 'react-markdown-renderer';

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
`;

export const Container = Flex.extend`
  flex: 1;
  align-self: stretch;
  width: 100%;
  max-width: 960px;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  padding: 30px 15px;
`;

export const Heading = styled.h1`
  width: 100%;
  margin: 10px 0 30px;
  font-weight: 700;
  font-size: 28px;
  text-align: center;
  color: #fff;
`;

export const Footer = styled.p`
  width: 100%;
  margin: 20px 0 0;
  font-weight: 300;
  font-size: 16px;
  text-align: center;
`;

export const PreviewContainer = Flex.extend`
  flex-direction: row;
  flex-wrap: nowrap;
  flex: 1;
  align-self: stretch;
  width: 100%;
  height: min-content;
  overflow: hidden;
  font-size: 16px;
`;

const PreviewChild = styled.div`
  display: flex;
  flex: 1;
  align-self: stretch;
  padding: 10px;
  font-size: inherit;
  background-color: rgba(255,255,255,0.75);
  border: 2px solid transparent;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #673AB7;
    border-radius: 10px;
  }
`;

const StyledTextarea = PreviewChild.withComponent('textarea');
export const Textarea = StyledTextarea.extend`
  margin-right: 10px;
  resize: none;
`;

const StyledPreview = PreviewChild.withComponent(MarkdownRenderer);
export const Preview = StyledPreview.extend`
  flex-direction: column;
  overflow: auto;
  margin-left: 10px;

  & p, & h1, & h2, & h3, & h4, & h5, & h6 {
    padding-bottom: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #9c27b0;
  }
`;

export const Heart = styled.span`
  color: #9c27b0;
`;

export const Link = styled.a`
  color: #9c27b0;
  text-decoration: none;
  transition: all .3s ease;

  &:hover,
  &:focus,
  &:active {
    color: #673AB7;
  }
`;