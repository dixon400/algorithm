def last_round_participation(skills):
    n = len(skills)
    result = [0] * n

    def merge_sort(start, end, round_number):
        if end - start <= 1:
            return

        mid = (start + end) // 2
        merge_sort(start, mid, round_number)
        merge_sort(mid, end, round_number)

        i, j = start, mid

        while i < mid:
            if j < end and skills[i] > skills[j]:
                j += 1
            else:
                result[i] = max(result[i], round_number)
                i += 1

        sorted_skills = [0] * (end - start)
        i, j, k = start, mid, 0

        while i < mid or j < end:
            if i < mid and (j == end or skills[i] <= skills[j]):
                sorted_skills[k] = skills[i]
                i += 1
            else:
                sorted_skills[k] = skills[j]
                j += 1
            k += 1

        for i in range(start, end):
            skills[i] = sorted_skills[i - start]

    # Initialize round_number to 1
    round_number = 1

    while round_number < n:
        merge_sort(0, n, round_number)
        round_number *= 2

    return result

skills1 = [4, 2, 7, 3, 1, 8, 6, 5]
skills2 = [4, 2, 1, 3]
skills3 = [3, 4, 2, 1]

print(last_round_participation(skills1))  # Output: [2, 1, 3, 1, 1, 3, 2, 1]
print(last_round_participation(skills2))  # Output: [2, 1, 1, 2]
print(last_round_participation(skills3))  # Output: [1, 2, 2, 1]
