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
`;

const PHeading = Heading.withComponent('p');

export const Footer = styled(PHeading)`
  margin-top: 20px;
  margin-bottom: 0;
  font-weight: 300;
  font-size: 16px;
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

export const Textarea = styled.textarea`
  display: flex;
  flex: 1;
  align-self: stretch;
  margin-right: 10px;
  padding: 10px;
  font-size: inherit;
  background-color: rgba(255,255,255,0.75);
  border: none;
  resize: none;

  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: #fff;
  }
  &::-webkit-scrollbar-thumb {
    border: 2px solid #fff;
    background: #673AB7;
    border-radius: 10px;
  }
`;

export const Preview = styled(MarkdownRenderer)`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: stretch;
  overflow: auto;
  margin-left: 10px;
  padding: 10px;
  font-size: inherit;
  background-color: rgba(255,255,255,0.75);

  & p {
    padding-bottom: 10px;
  }

  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: #fff;
  }
  &::-webkit-scrollbar-thumb {
    border: 2px solid #fff;
    background: #9c27b0;
    border-radius: 10px;
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