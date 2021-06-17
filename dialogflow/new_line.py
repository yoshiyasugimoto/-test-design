

def new_line_text(num_characters_line: int, row_text: str):
    for num, char in enumerate(row_text, 1):
        if num % num_characters_line == 0:
            print(char)
        else:
            print(char, end="")


if __name__ == '__main__':
    row_text = input("input text: ")
    new_line_text(18, row_text)
