def binary_search(list, target):
    first = 0
    last = len(list) - 1
    middle = ((last + first)//2 )

    while first <= last:
        if list[middle] == target:
            return list[middle]
        elif list[middle] > target:
            first = middle + 1
        else:
            last = middle - 1

    return None