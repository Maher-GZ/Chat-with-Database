class ConversationHistory:
    def __init__(self):
        self.history=[]

    def add_question(self,question):
        self.history.append(f"\nQuestion:{question}\n")

    def add_answer(self,answer):

        self.history.append(f"\nAnswer:{answer}\n")

    def get_history(self):
        return "\n".join(self.history)

