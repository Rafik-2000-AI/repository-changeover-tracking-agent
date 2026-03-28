class ChangeoverTracker:
    def __init__(self):
        self.sessions = []

    def start_session(self, session_id):
        session = {'id': session_id, 'start_time': self.current_time(), 'end_time': None}
        self.sessions.append(session)
        return session

    def end_session(self, session_id):
        for session in self.sessions:
            if session['id'] == session_id:
                session['end_time'] = self.current_time()
                return session
        return None

    def current_time(self):
        from datetime import datetime
        return datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')

    def get_sessions(self):
        return self.sessions
