def sign(arr):
    product = 1

    for n in arr:
        product *= n
    print(product)

    if product > 0:
        return 1
    elif product < 0:
        return -1
    elif product == 0:
        return 0

sign([1, -2, -3, 5])


def reverse_word_in_string(str):
    words = str.split(' ')
    print(words)
    reversed_words = words.reverse()

    print(words)
    return 0

s = "we test coders"
reverse_word_in_string(s)