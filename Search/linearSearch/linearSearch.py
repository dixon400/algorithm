def linear_search(list, target):
    """
    Return target if found, else return false
    """
    for i in range(0, len(list)):
        if list[i] == target:
            return list[i]
    return None
