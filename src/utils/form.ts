const form = {
  prechecker(title: string, contents: string) {
    if (title.trim() === '') {
      return {
        message: '제목을 입력해주세요.',
        isError: true,
      }
    }

    if (title.trim().length > 50) {
      return {
        message: '제목은 최대 50자까지 작성할 수 있습니다.',
        isError: true,
      }
    }

    if (contents.trim() === '') {
      return {
        message: '내용을 입력해주세요.',
        isError: true,
      }
    }

    if (contents.trim().length > 1000) {
      return {
        message: '내용은 최대 1,000자까지 작성할 수 있습니다.',
        isError: true,
      }
    }

    return {
      message: '최소, 최대 글자 수 체크 로직 통과',
      isError: false,
    }
  }
}

export default form;