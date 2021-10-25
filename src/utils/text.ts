const text = {
  ellipsis(text: string, maxLength = 10) {
    return text.length <= maxLength ? text : `${text.slice(0, maxLength)}...`;
  },

  splitNewLine(text: string) {
    return text.split('\n').map((line: string, index: number) => {
      return `<span key=${index}>${line}<br /></span>`
    })
  },

  emptyAltText(value: string, type: 'title' | 'contents') {
    if (!value) {
      return `[${type === 'title' ? '제목' : '내용'}없음]`;
    }

    if (type === 'contents') {
      return this.splitNewLine(value);
    }

    return value;
  },
}

export default text;