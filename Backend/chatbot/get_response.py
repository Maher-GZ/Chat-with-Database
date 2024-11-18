from langchain_community.utilities import SQLDatabase
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser
def get_response(db:SQLDatabase,user_query:str, chat_history:list,sql_chain,api_key):
    template = """
        You are a data analyst at a company. You are interacting with a user who is asking you questions about this company's database.
        Based on the table schema below, SQL query, and SQL response, write a Natural Language Response.format the response to make it more readable
        If you don't know the answer say "I am sorry, I don't know. Can I help you in another thing"


        <SCHEMA>{schema}</SCHEMA>

        Conversation History: {chat_history}
        SQL Query: <SQL>{query}</SQL>
        User Question: {question}
        SQL Response: {response}

        

        """
    

    prompt=ChatPromptTemplate.from_template(template)
    llm=ChatOpenAI(model="gpt-4-0125-preview",openai_api_key=api_key)

    chain=(
        RunnablePassthrough.assign(query=sql_chain).assign(
            schema=lambda _:db.get_table_info(),
            response=lambda vars:db.run(vars["query"]),
             

        )
        | prompt
        | llm 
        | StrOutputParser()
    )
    return chain.invoke({
        "question":user_query,
        "chat_history":chat_history,
    })