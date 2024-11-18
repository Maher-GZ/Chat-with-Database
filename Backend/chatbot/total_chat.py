from .chat_history import ConversationHistory
from langchain_community.utilities import SQLDatabase
from Backend.models import User
from .sql_chain import get_sql_chain
from .get_response import get_response

conversation_history = ConversationHistory() 
   
def total_chat(user_query):
    conversation_history.add_question(user_query)
    latest_user = User.query.order_by(User.id.desc()).first()    
    database_uri = latest_user.database_uri
    api_key=latest_user.api_key
    db = SQLDatabase.from_uri(database_uri)
    sql_chain = get_sql_chain(db=db,api_key=api_key)
    response = get_response(db=db,
                            chat_history=conversation_history,
                            api_key=api_key,
                            user_query=user_query,
                            sql_chain=sql_chain
                            )
    conversation_history.add_answer(response)
    
    return response

    
        

