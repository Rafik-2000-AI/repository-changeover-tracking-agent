def parse_time_string(time_string):
    """
    Parse a time string in HH:MM:SS format and return the total seconds.
    """
    try:
        parts = list(map(int, time_string.split(':')))
        if len(parts) != 3:
            raise ValueError("Time must be in HH:MM:SS format.")
        hours, minutes, seconds = parts
        return hours * 3600 + minutes * 60 + seconds
    except Exception as e:
        raise ValueError("Invalid time format.") from e


def seconds_to_time_format(seconds):
    """
    Convert seconds to HH:MM:SS format.
    """
    hours = seconds // 3600
    minutes = (seconds % 3600) // 60
    seconds = seconds % 60
    return f'{hours:02}:{minutes:02}:{seconds:02}'


def calculate_time_difference(start_time, end_time):
    """
    Calculate the difference in seconds between two time strings in HH:MM:SS format.
    """
    start_seconds = parse_time_string(start_time)
    end_seconds = parse_time_string(end_time)
    return end_seconds - start_seconds
